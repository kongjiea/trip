(function () {
  function getData() {
    return Array.isArray(window.TRIP_DATA) ? window.TRIP_DATA : [];
  }

  function createCard(spot) {
    var tags = spot.tags
      .slice(0, 3)
      .map(function (tag) {
        return '<span class="tag">' + tag + "</span>";
      })
      .join("");

    return (
      '<article class="spot-card reveal tone-' +
      spot.heroTone +
      '">' +
      '<div class="spot-card-visual">' +
      '<p>' +
      spot.province +
      " · " +
      spot.city +
      "</p>" +
      "<h3>" +
      spot.name +
      "</h3>" +
      "</div>" +
      '<div class="spot-card-body">' +
      '<div class="tag-row">' +
      tags +
      "</div>" +
      "<p>" +
      spot.headline +
      "</p>" +
      '<div class="card-meta">' +
      "<span>推荐时长：" +
      spot.duration +
      "</span>" +
      "<span>最佳季节：" +
      spot.seasons.join(" / ") +
      "</span>" +
      "</div>" +
      '<a class="text-link" href="./spot.html?id=' +
      spot.id +
      '">查看详细攻略</a>' +
      "</div>" +
      "</article>"
    );
  }

  function setupNav() {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".main-nav");
    if (!toggle || !nav) {
      return;
    }

    toggle.addEventListener("click", function () {
      nav.classList.toggle("nav-open");
    });
  }

  function renderHome() {
    var container = document.getElementById("featured-spots");
    if (!container) {
      return;
    }
    var data = getData().slice(0, 4);
    container.innerHTML = data.map(createCard).join("");
  }

  function getUniqueValues(data, key) {
    return Array.from(
      new Set(
        data.reduce(function (acc, item) {
          var value = item[key];
          if (Array.isArray(value)) {
            return acc.concat(value);
          }
          acc.push(value);
          return acc;
        }, [])
      )
    ).filter(Boolean);
  }

  function fillSelect(selectId, values) {
    var select = document.getElementById(selectId);
    if (!select) {
      return;
    }
    values.forEach(function (value) {
      var option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }

  function parseQuery() {
    return new URLSearchParams(window.location.search);
  }

  function renderSpots() {
    var list = document.getElementById("spot-list");
    if (!list) {
      return;
    }

    var data = getData();
    fillSelect("region-filter", getUniqueValues(data, "region"));
    fillSelect("category-filter", getUniqueValues(data, "category"));
    fillSelect("season-filter", getUniqueValues(data, "seasons"));

    var searchInput = document.getElementById("search-input");
    var regionFilter = document.getElementById("region-filter");
    var categoryFilter = document.getElementById("category-filter");
    var seasonFilter = document.getElementById("season-filter");
    var popularityFilter = document.getElementById("popularity-filter");
    var resetButton = document.getElementById("reset-filters");
    var countNode = document.getElementById("results-count");
    var titleNode = document.getElementById("results-title");
    var emptyState = document.getElementById("empty-state");

    var query = parseQuery();
    if (query.get("q")) {
      searchInput.value = query.get("q");
    }
    if (query.get("category")) {
      categoryFilter.value = query.get("category");
    }

    function applyFilters() {
      var keyword = searchInput.value.trim().toLowerCase();
      var region = regionFilter.value;
      var category = categoryFilter.value;
      var season = seasonFilter.value;
      var popularity = popularityFilter.value;

      var results = data.filter(function (spot) {
        var searchable = [spot.name, spot.alias, spot.city, spot.province, spot.headline, spot.category]
          .join(" ")
          .toLowerCase();
        var matchKeyword = !keyword || searchable.indexOf(keyword) !== -1;
        var matchRegion = !region || spot.region === region;
        var matchCategory = !category || spot.category === category;
        var matchSeason = !season || spot.seasons.indexOf(season) !== -1;
        var matchPopularity = !popularity || spot.popularity === popularity;
        return matchKeyword && matchRegion && matchCategory && matchSeason && matchPopularity;
      });

      list.innerHTML = results.map(createCard).join("");
      countNode.textContent = "共 " + results.length + " 个景点";
      titleNode.textContent = keyword ? "与“" + searchInput.value + "”相关的结果" : "全部景点";
      emptyState.classList.toggle("hidden", results.length !== 0);
    }

    [searchInput, regionFilter, categoryFilter, seasonFilter, popularityFilter].forEach(function (element) {
      element.addEventListener("input", applyFilters);
      element.addEventListener("change", applyFilters);
    });

    resetButton.addEventListener("click", function () {
      searchInput.value = "";
      regionFilter.value = "";
      categoryFilter.value = "";
      seasonFilter.value = "";
      popularityFilter.value = "";
      applyFilters();
    });

    applyFilters();
  }

  function renderSectionTitle(title, subtitle, id) {
    return (
      '<section class="detail-section" id="' +
      id +
      '">' +
      "<h2>" +
      title +
      "</h2>" +
      (subtitle ? "<p>" + subtitle + "</p>" : "")
    );
  }

  function closeSection() {
    return "</section>";
  }

  function renderSpotDetail() {
    var hero = document.getElementById("detail-hero");
    var detail = document.getElementById("spot-detail");
    var toc = document.getElementById("spot-toc");
    var related = document.getElementById("related-spots");

    if (!hero || !detail || !toc || !related) {
      return;
    }

    var spotId = parseQuery().get("id");
    var data = getData();
    var spot = data.find(function (item) {
      return item.id === spotId;
    });

    if (!spot) {
      hero.innerHTML =
        '<div class="container"><div class="detail-hero-shell tone-stone"><p class="eyebrow">未找到景点</p><h1>这个攻略页面不存在。</h1><a class="button button-primary" href="./spots.html">返回景点列表</a></div></div>';
      detail.innerHTML = "";
      toc.innerHTML = "";
      related.innerHTML = "";
      return;
    }

    document.title = spot.name + "详细攻略 | 山海游记";
    var meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", spot.intro);
    }

    hero.innerHTML =
      '<div class="container"><div class="detail-hero-shell tone-' +
      spot.heroTone +
      '">' +
      '<div class="detail-hero-copy">' +
      '<p class="eyebrow">' +
      spot.province +
      " · " +
      spot.city +
      "</p>" +
      "<h1>" +
      spot.name +
      "</h1>" +
      '<p class="detail-subtitle">' +
      spot.alias +
      " | " +
      spot.category +
      " | 热度 " +
      spot.popularity +
      "</p>" +
      "<p>" +
      spot.headline +
      "</p>" +
      '<div class="detail-tags">' +
      spot.tags
        .map(function (tag) {
          return '<span class="tag light-tag">' + tag + "</span>";
        })
        .join("") +
      "</div>" +
      "</div>" +
      '<div class="detail-hero-meta">' +
      "<strong>推荐游玩</strong><span>" +
      spot.duration +
      "</span>" +
      "<strong>最佳季节</strong><span>" +
      spot.seasons.join(" / ") +
      "</span>" +
      "<strong>预约提醒</strong><span>" +
      spot.reservationInfo +
      "</span>" +
      "</div>" +
      "</div></div>";

    var tocItems = [
      ["basic", "基础信息"],
      ["reasons", "为什么值得去"],
      ["best-time", "最佳旅游时间"],
      ["ticket", "门票与开放"],
      ["transport", "交通攻略"],
      ["routes", "游玩路线"],
      ["must-see", "必打卡点位"],
      ["food", "美食推荐"],
      ["stay", "住宿建议"],
      ["tips", "实用贴士"]
    ];

    toc.innerHTML =
      '<div class="toc-card"><p class="eyebrow">页面目录</p>' +
      tocItems
        .map(function (item) {
          return '<a href="#' + item[0] + '">' + item[1] + "</a>";
        })
        .join("") +
      "</div>";

    var html = "";
    html += renderSectionTitle("基础信息", spot.intro, "basic");
    html +=
      '<div class="info-grid">' +
      '<div class="info-item"><strong>景点名称</strong><span>' +
      spot.name +
      "</span></div>" +
      '<div class="info-item"><strong>别名</strong><span>' +
      spot.alias +
      "</span></div>" +
      '<div class="info-item"><strong>所在城市</strong><span>' +
      spot.city +
      "</span></div>" +
      '<div class="info-item"><strong>景点类型</strong><span>' +
      spot.category +
      "</span></div>" +
      '<div class="info-item"><strong>推荐时长</strong><span>' +
      spot.duration +
      "</span></div>" +
      '<div class="info-item"><strong>热门程度</strong><span>' +
      spot.popularity +
      "</span></div>" +
      "</div>" +
      '<ul class="bullet-list">' +
      spot.highlights
        .map(function (item) {
          return "<li>" + item + "</li>";
        })
        .join("") +
      "</ul>";
    html += closeSection();

    html += renderSectionTitle("为什么值得去", "把适合人群和旅行亮点直接说清楚。", "reasons");
    html +=
      "<p>" +
      spot.crowd +
      "</p>" +
      '<div class="quote-box"><strong>核心亮点：</strong>' +
      spot.highlights.join("、") +
      "</div>";
    html += closeSection();

    html += renderSectionTitle("最佳旅游时间", spot.bestTime, "best-time");
    html += "<p>" + spot.weatherTips + "</p>";
    html += closeSection();

    html += renderSectionTitle("门票与开放信息", "", "ticket");
    html +=
      '<div class="info-grid">' +
      '<div class="info-item"><strong>开放时间</strong><span>' +
      spot.openingHours +
      "</span></div>" +
      '<div class="info-item"><strong>门票信息</strong><span>' +
      spot.ticketInfo +
      "</span></div>" +
      '<div class="info-item"><strong>预约信息</strong><span>' +
      spot.reservationInfo +
      "</span></div>" +
      "</div>";
    html += closeSection();

    html += renderSectionTitle("交通攻略", "", "transport");
    html +=
      '<h3>外部交通</h3><ul class="bullet-list">' +
      spot.transport.external.map(function (item) {
        return "<li>" + item + "</li>";
      }).join("") +
      "</ul>" +
      '<h3>本地交通</h3><ul class="bullet-list">' +
      spot.transport.local.map(function (item) {
        return "<li>" + item + "</li>";
      }).join("") +
      "</ul>" +
      '<div class="quote-box"><strong>站点到景区建议：</strong>' +
      spot.transport.stationRoute +
      "</div>";
    html += closeSection();

    html += renderSectionTitle("游玩路线推荐", "按半日、一日和深度体验拆分。", "routes");
    html +=
      '<div class="stack-grid">' +
      spot.routes
        .map(function (route) {
          return (
            '<article class="stack-card">' +
            "<h3>" +
            route.title +
            "</h3>" +
            "<p><strong>适合人群：</strong>" +
            route.audience +
            "</p>" +
            "<p><strong>预计耗时：</strong>" +
            route.duration +
            "</p>" +
            '<ol class="ordered-list">' +
            route.steps
              .map(function (step) {
                return "<li>" + step + "</li>";
              })
              .join("") +
            "</ol>" +
            "<p><strong>提醒：</strong>" +
            route.tip +
            "</p>" +
            "</article>"
          );
        })
        .join("") +
      "</div>";
    html += closeSection();

    html += renderSectionTitle("必打卡景点 / 区域", "", "must-see");
    html +=
      '<div class="stack-grid">' +
      spot.mustSeeSpots
        .map(function (item) {
          return (
            '<article class="stack-card">' +
            "<h3>" +
            item.name +
            "</h3>" +
            "<p><strong>建议停留：</strong>" +
            item.stay +
            "</p>" +
            "<p><strong>值得看：</strong>" +
            item.reason +
            "</p>" +
            "<p><strong>小提醒：</strong>" +
            item.tip +
            "</p>" +
            "</article>"
          );
        })
        .join("") +
      "</div>";
    html += closeSection();

    html += renderSectionTitle("美食推荐", "", "food");
    html +=
      '<ul class="bullet-list">' +
      spot.foods.map(function (item) {
        return "<li>" + item + "</li>";
      }).join("") +
      "</ul>";
    html += closeSection();

    html += renderSectionTitle("住宿建议", "", "stay");
    html +=
      '<ul class="bullet-list">' +
      spot.hotels.map(function (item) {
        return "<li>" + item + "</li>";
      }).join("") +
      "</ul>";
    html += closeSection();

    html += renderSectionTitle("实用贴士与 FAQ", "", "tips");
    html +=
      '<ul class="bullet-list">' +
      spot.travelTips.map(function (item) {
        return "<li>" + item + "</li>";
      }).join("") +
      "</ul>" +
      '<div class="faq-list">' +
      spot.faq
        .map(function (item) {
          return (
            '<article class="faq-item">' +
            "<h3>" +
            item.q +
            "</h3>" +
            "<p>" +
            item.a +
            "</p>" +
            "</article>"
          );
        })
        .join("") +
      "</div>";
    html += closeSection();

    detail.innerHTML = html;

    related.innerHTML = spot.related
      .map(function (id) {
        var matched = data.find(function (item) {
          return item.id === id;
        });
        return matched ? createCard(matched) : "";
      })
      .join("");
  }

  function setupBackToTop() {
    var button = document.getElementById("back-to-top");
    if (!button) {
      return;
    }
    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    window.addEventListener("scroll", function () {
      button.classList.toggle("visible", window.scrollY > 500);
    });
  }

  function revealOnScroll() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length || !("IntersectionObserver" in window)) {
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  setupNav();
  renderHome();
  renderSpots();
  renderSpotDetail();
  setupBackToTop();
  revealOnScroll();
})();

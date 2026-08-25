document.addEventListener("DOMContentLoaded", () => {
  const DATA = window.TAKTSANG_CONTENT;

  if (!DATA) {
    console.error("Taktsang content.js was not loaded.");
    return;
  }

  /* =====================================================
     FACILITIES
  ====================================================== */
  const facilityTabs = [...document.querySelectorAll(".facility-tab")];
  const feature = document.getElementById("facilityFeature");
  const featureImage = document.getElementById("facilityFeatureImage");
  const featureEyebrow = document.getElementById("facilityFeatureEyebrow");
  const featureTitle = document.getElementById("facilityFeatureTitle");
  const featureSummary = document.getElementById("facilityFeatureSummary");
  const featureMeta = document.getElementById("facilityFeatureMeta");

  const facilityModal = document.getElementById("facilityModal");
  const facilityModalImage = document.getElementById("facilityModalImage");
  const facilityModalEyebrow = document.getElementById("facilityModalEyebrow");
  const facilityModalTitle = document.getElementById("facilityModalTitle");
  const facilityModalSummary = document.getElementById("facilityModalSummary");
  const facilityModalDescription = document.getElementById("facilityModalDescription");
  const facilityModalFeatures = document.getElementById("facilityModalFeatures");
  const facilityDots = document.getElementById("facilityDots");
  const facilityPrev = document.getElementById("facilityPrev");
  const facilityNext = document.getElementById("facilityNext");

  let activeFacilityIndex = 0;

  function setBackground(element, image, fallback = "") {
    if (!element) return;

    if (!image) {
      element.style.backgroundImage = fallback
        ? `linear-gradient(145deg, #174A3A, #5F7650), ${fallback}`
        : "linear-gradient(145deg, #174A3A, #5F7650)";
      return;
    }

    const test = new Image();
    test.onload = () => {
      element.style.backgroundImage = `url("${image}")`;
    };
    test.onerror = () => {
      element.style.backgroundImage =
        "linear-gradient(145deg, #174A3A, #5F7650)";
    };
    test.src = image;
  }

  function renderFacilityPreview(index) {
    activeFacilityIndex = index;
    const item = DATA.facilities[index];

    facilityTabs.forEach((tab, i) => {
      const active = i === index;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    featureEyebrow.textContent = item.eyebrow;
    featureTitle.textContent = item.title;
    featureSummary.textContent = item.summary;

    featureMeta.innerHTML = "";
    item.meta.forEach(meta => {
      const span = document.createElement("span");
      span.textContent = meta;
      featureMeta.appendChild(span);
    });

    setBackground(featureImage, item.image);
  }

  function renderFacilityModal(index) {
    activeFacilityIndex = index;
    const item = DATA.facilities[index];

    facilityModalEyebrow.textContent = item.eyebrow;
    facilityModalTitle.textContent = item.title;
    facilityModalSummary.textContent = item.summary;
    facilityModalDescription.textContent = item.description;

    facilityModalFeatures.innerHTML = "";
    item.features.forEach(featureText => {
      const li = document.createElement("li");
      li.textContent = featureText;
      facilityModalFeatures.appendChild(li);
    });

    setBackground(facilityModalImage, item.image);
    renderFacilityDots();
  }

  function renderFacilityDots() {
    facilityDots.innerHTML = "";
    DATA.facilities.forEach((item, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = `modal-dot ${index === activeFacilityIndex ? "is-active" : ""}`;
      dot.setAttribute("aria-label", `Show ${item.title}`);
      dot.addEventListener("click", () => {
        renderFacilityModal(index);
        renderFacilityPreview(index);
      });
      facilityDots.appendChild(dot);
    });
  }

  function openFacility(index) {
    renderFacilityModal(index);
    renderFacilityPreview(index);
    facilityModal.hidden = false;
    document.body.classList.add("modal-open");
    facilityModal.querySelector(".modal-close").focus();
  }

  function closeFacility() {
    facilityModal.hidden = true;
    document.body.classList.remove("modal-open");
    feature.focus();
  }

  facilityTabs.forEach((tab, index) => {
    tab.addEventListener("mouseenter", () => renderFacilityPreview(index));
    tab.addEventListener("focus", () => renderFacilityPreview(index));
    tab.addEventListener("click", () => openFacility(index));
  });

  feature.addEventListener("mouseenter", () => renderFacilityPreview(activeFacilityIndex));
  feature.addEventListener("click", () => openFacility(activeFacilityIndex));
  feature.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openFacility(activeFacilityIndex);
    }
  });

  facilityPrev.addEventListener("click", () => {
    const next = (activeFacilityIndex - 1 + DATA.facilities.length) % DATA.facilities.length;
    renderFacilityModal(next);
    renderFacilityPreview(next);
  });

  facilityNext.addEventListener("click", () => {
    const next = (activeFacilityIndex + 1) % DATA.facilities.length;
    renderFacilityModal(next);
    renderFacilityPreview(next);
  });

  facilityModal.querySelectorAll("[data-close-modal]").forEach(el => {
    el.addEventListener("click", closeFacility);
  });

  /* =====================================================
     COMMUNITY SPACES
  ====================================================== */
  const communityGrid = document.getElementById("communityGrid");

  DATA.communitySpaces.forEach(item => {
    const card = document.createElement("article");
    card.className = `community-card ${item.program ? "program" : ""}`;
    card.style.setProperty("--community-image", `url("${item.image}")`);

    const text = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.text;

    text.append(title, description);
    card.appendChild(text);
    communityGrid.appendChild(card);
  });

  /* =====================================================
     STAFF DIRECTORY
  ====================================================== */
  const staffSearch = document.getElementById("staffSearch");
  const categoryFilter = document.getElementById("categoryFilter");
  const departmentFilter = document.getElementById("departmentFilter");
  const clearFilters = document.getElementById("clearFilters");
  const staffCount = document.getElementById("staffCount");
  const staffDirectory = document.getElementById("staffDirectory");
  const noResults = document.getElementById("noResults");

  const preferredTeachingOrder = [
    "Wellbeing",
    "Science",
    "Mathematics",
    "Languages",
    "ICT & Technology"
  ];

  const categoryLabels = {
    teaching: "Teaching Staff",
    "non-teaching": "Non-Teaching Staff",
    support: "Support Staff"
  };

  const categoryDescriptions = {
    teaching: "Teachers and department leaders who guide learning, curiosity and discovery.",
    "non-teaching": "Professionals who support administration, organisation and everyday school operations.",
    support: "The people who care for students, spaces and services beyond the classroom."
  };

  function getDepartments() {
    return [...new Set(DATA.staff.map(person => person.department))].sort();
  }

  function buildDepartmentFilter() {
    departmentFilter.innerHTML = '<option value="all">All Departments</option>';
    getDepartments().forEach(department => {
      const option = document.createElement("option");
      option.value = department;
      option.textContent = department;
      departmentFilter.appendChild(option);
    });
  }

  function filteredStaff() {
    const query = staffSearch.value.toLowerCase().trim();
    const category = categoryFilter.value;
    const department = departmentFilter.value;

    return DATA.staff.filter(person => {
      const searchable = [
        person.name,
        person.role,
        person.department
      ].join(" ").toLowerCase();

      return (
        (!query || searchable.includes(query)) &&
        (category === "all" || person.category === category) &&
        (department === "all" || person.department === department)
      );
    });
  }

  function sortDepartments(departments, category) {
    if (category !== "teaching") return departments.sort();

    return departments.sort((a, b) => {
      const ia = preferredTeachingOrder.indexOf(a);
      const ib = preferredTeachingOrder.indexOf(b);
      return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
    });
  }

  function createStaffCard(person) {
    const card = document.createElement("article");
    card.className = "staff-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View profile for ${person.name}`);

    const photo = document.createElement("div");
    photo.className = "staff-card-photo";

    const image = document.createElement("img");
    image.src = person.photo;
    image.alt = person.name;
    image.loading = "lazy";

    const fallback = document.createElement("span");
    fallback.textContent = person.initials;
    fallback.hidden = true;

    image.addEventListener("error", () => {
      image.remove();
      photo.classList.add("photo-fallback");
      fallback.hidden = false;
      photo.appendChild(fallback);
    });

    photo.appendChild(image);

    const content = document.createElement("div");
    content.className = "staff-card-content";

    const role = document.createElement("p");
    role.className = "staff-role";
    role.textContent = person.role;

    const name = document.createElement("h3");
    name.className = "staff-name";
    name.textContent = person.name;

    const department = document.createElement("p");
    department.className = "staff-department";
    department.textContent = person.department;

    const action = document.createElement("div");
    action.className = "staff-card-action";
    action.innerHTML = "<span>View profile</span><span aria-hidden='true'>↗</span>";

    content.append(role, name, department, action);
    card.append(photo, content);

    card.addEventListener("click", () => openStaff(person));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openStaff(person);
      }
    });

    return card;
  }

  function createDepartmentBlock(department, people) {
    const block = document.createElement("section");
    block.className = "department-block";

    const heading = document.createElement("div");
    heading.className = "department-heading";

    const title = document.createElement("h4");
    title.textContent = department;

    const count = document.createElement("span");
    count.textContent = `${people.length} ${people.length === 1 ? "member" : "members"}`;

    heading.append(title, count);

    const grid = document.createElement("div");
    grid.className = "staff-grid";
    people.forEach(person => grid.appendChild(createStaffCard(person)));

    block.append(heading, grid);
    return block;
  }

  function renderCategory(category, people) {
    if (!people.length) return;

    const section = document.createElement("section");
    section.className = "staff-category";

    const heading = document.createElement("div");
    heading.className = "category-heading";

    const left = document.createElement("div");
    const label = document.createElement("p");
    label.className = "eyebrow";
    label.textContent = category === "teaching" ? "ACADEMIC COMMUNITY" :
                        category === "non-teaching" ? "SCHOOL OPERATIONS" :
                        "COMMUNITY SUPPORT";

    const title = document.createElement("h3");
    title.textContent = categoryLabels[category];
    left.append(label, title);

    const description = document.createElement("p");
    description.textContent = categoryDescriptions[category];

    heading.append(left, description);
    section.appendChild(heading);

    const groups = {};
    people.forEach(person => {
      if (!groups[person.department]) groups[person.department] = [];
      groups[person.department].push(person);
    });

    sortDepartments(Object.keys(groups), category).forEach(department => {
      section.appendChild(createDepartmentBlock(department, groups[department]));
    });

    staffDirectory.appendChild(section);
  }

  function renderStaff() {
    const people = filteredStaff();
    staffDirectory.innerHTML = "";

    ["teaching", "non-teaching", "support"].forEach(category => {
      renderCategory(
        category,
        people.filter(person => person.category === category)
      );
    });

    staffCount.textContent = people.length;
    noResults.hidden = people.length !== 0;
  }

  /* =====================================================
     STAFF PROFILE MINI MODAL
  ====================================================== */
  const staffModal = document.getElementById("staffModal");
  const staffModalPhoto = document.getElementById("staffModalPhoto");
  const staffModalInitials = document.getElementById("staffModalInitials");
  const staffModalCategory = document.getElementById("staffModalCategory");
  const staffModalName = document.getElementById("staffModalName");
  const staffModalRole = document.getElementById("staffModalRole");
  const staffModalDepartment = document.getElementById("staffModalDepartment");
  const staffModalOverview = document.getElementById("staffModalOverview");
  const staffModalResponsibilities = document.getElementById("staffModalResponsibilities");

  function openStaff(person) {
    staffModalCategory.textContent = categoryLabels[person.category].toUpperCase();
    staffModalName.textContent = person.name;
    staffModalRole.textContent = person.role;
    staffModalDepartment.textContent = person.department;
    staffModalOverview.textContent = person.description;

    staffModalResponsibilities.innerHTML = "";
    person.responsibilities.forEach(item => {
      const tag = document.createElement("span");
      tag.className = "responsibility-item";
      tag.textContent = item;
      staffModalResponsibilities.appendChild(tag);
    });

    staffModalPhoto.innerHTML = "";
    const image = document.createElement("img");
    image.src = person.photo;
    image.alt = person.name;
    image.addEventListener("error", () => {
      staffModalPhoto.classList.add("fallback");
      staffModalPhoto.innerHTML = `<span>${person.initials}</span>`;
    });
    staffModalPhoto.appendChild(image);

    staffModal.hidden = false;
    document.body.classList.add("modal-open");
    staffModal.querySelector(".modal-close").focus();
  }

  function closeStaff() {
    staffModal.hidden = true;
    document.body.classList.remove("modal-open");
  }

  staffModal.querySelectorAll("[data-close-staff-modal]").forEach(el => {
    el.addEventListener("click", closeStaff);
  });

  /* =====================================================
     GLOBAL EVENTS
  ====================================================== */
  function closeAnyModal() {
    if (!facilityModal.hidden) closeFacility();
    if (!staffModal.hidden) closeStaff();
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeAnyModal();

    if (!facilityModal.hidden && event.key === "ArrowLeft") {
      const next = (activeFacilityIndex - 1 + DATA.facilities.length) % DATA.facilities.length;
      renderFacilityModal(next);
      renderFacilityPreview(next);
    }

    if (!facilityModal.hidden && event.key === "ArrowRight") {
      const next = (activeFacilityIndex + 1) % DATA.facilities.length;
      renderFacilityModal(next);
      renderFacilityPreview(next);
    }
  });

  staffSearch.addEventListener("input", renderStaff);
  categoryFilter.addEventListener("change", renderStaff);
  departmentFilter.addEventListener("change", renderStaff);

  clearFilters.addEventListener("click", () => {
    staffSearch.value = "";
    categoryFilter.value = "all";
    departmentFilter.value = "all";
    renderStaff();
  });

  /* INITIALISE */
  buildDepartmentFilter();
  renderFacilityPreview(0);
  renderStaff();
});

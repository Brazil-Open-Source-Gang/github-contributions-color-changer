const colors = {
  blue: {
    level: {
      one: "#99d6ff",
      two: "#4db8ff",
      tree: "#33adff",
      four: "#008ae6",
    },
  },
  red: {
    level: {
      one: "#ff9999",
      two: "#ff4d4d",
      tree: "#ff3333",
      four: "#e60000",
    },
  },
  green: {
    level: {
      one: "#99ff99",
      two: "#4dff4d",
      tree: "#33ff33",
      four: "#00e600",
    },
  },
  yellow: {
    level: {
      one: "#ffff99",
      two: "#ffff4d",
      tree: "#ffff33",
      four: "#e6e600",
    },
  },
  purple: {
    level: {
      one: "#cc99ff",
      two: "#b84dff",
      tree: "#ad33ff",
      four: "#8a00e6",
    },
  },
};

function setColorsOnGithub(selectedColor) {
  const blocks1 = document.querySelectorAll('[data-level="1"]');
  const blocks2 = document.querySelectorAll('[data-level="2"]');
  const blocks3 = document.querySelectorAll('[data-level="3"]');
  const blocks4 = document.querySelectorAll('[data-level="4"]');

  blocks1.forEach((block) => {
    block.style.backgroundColor = colors[selectedColor].level.one;
    block.style.opacity = 0.25;
  });

  blocks2.forEach((block) => {
    block.style.backgroundColor = colors[selectedColor].level.two;
  });

  blocks3.forEach((block) => {
    block.style.backgroundColor = colors[selectedColor].level.tree;
  });

  blocks4.forEach((block) => {
    block.style.backgroundColor = colors[selectedColor].level.four;
  });
}

chrome.runtime.onMessage.addListener((request) => {
  setColorsOnGithub(request.color);
});

chrome.storage.local.get("selected_color", function (resultado) {
  if (resultado.selected_color) {
    setColorsOnGithub(resultado.selected_color);
  } else {
    setColorsOnGithub("green");
  }
});

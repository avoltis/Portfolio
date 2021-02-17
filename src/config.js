const themeOptions = {
  light: "light",
  dark: "dark",
};

const styles = {
  united: "https://jenil.github.io/bulmaswatch/united/bulmaswatch.min.css",
  darkly: process.env.PUBLIC_URL + "/styles/darkly.css",
  nuclear: "https://jenil.github.io/bulmaswatch/nuclear/bulmaswatch.min.css",
  flatly: "https://jenil.github.io/bulmaswatch/flatly/bulmaswatch.min.css",
  sandstone:
    "https://jenil.github.io/bulmaswatch/sandstone/bulmaswatch.min.css",
  lux: "https://jenil.github.io/bulmaswatch/lux/bulmaswatch.min.css",
  materia: "https://jenil.github.io/bulmaswatch/materia/bulmaswatch.min.css",
  slate: "https://jenil.github.io/bulmaswatch/slate/bulmaswatch.min.css",
  united: process.env.PUBLIC_URL + "/styles/united.css",
  yeti: "https://jenil.github.io/bulmaswatch/yeti/bulmaswatch.min.css",
};

const apollo_config = {
  uri: "https://portfolio-graphql-voltis.herokuapp.com/",
};

module.exports = {
  themeOptions,
  styles,
  apollo_config,
};

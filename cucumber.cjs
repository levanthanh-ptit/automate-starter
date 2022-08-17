const now = new Date().toISOString().replaceAll(":", "-");
module.exports = {
  default: {
    parallel: 5,
    format: [`html:./reports/report_${now}.html`],
    formatOptions: {
      snippetInterface: "synchronous"
    },
    publishQuiet: true,
  },
};

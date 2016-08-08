const express = require('express');
const { parseInseeCode } = require('./lib/utils');

const app = express();

app.get('/commune/:code', function (req, res) {
  const { codeDepartement, codeCommune } = parseInseeCode(req.params.code);
  res.redirect(`http://www.insee.fr/fr/methodes/nomenclatures/cog/fichecommunale.asp?codedep=${codeDepartement}&codecom=${codeCommune}`);
});

app.listen(process.env.PORT || 5000);

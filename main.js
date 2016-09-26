/*
 * Grid Generator for HAC css system
 *
 * @param colWidth column width (px)
 * @param colNum number of column
 * @param colSpace space between columns (px)
 */
function generate_grid(colWidth, colNum, colSpace) {
  var str = `
/**
 * Generated with https://github.com/trungdq88/960-grid-generator
 * Columns number: ${colNum} column(s)
 * Column width: ${colWidth}px
 * Column space: ${colSpace}px
 *
 * Content width: ${(colWidth + colSpace) * colNum - colSpace}px
 * Full width: ${(colWidth + colSpace) * colNum}px
 */
body {
  min-width: ${(colWidth + colSpace) * colNum}px;
}
.container_${colNum} {
  margin-left: auto;
  margin-right: auto;
  width: ${(colWidth + colSpace) * colNum}px;
  overflow: hidden;
}
`;

  for (let i = 1; i < colNum; i++) {
    str += `.grid_${i},\n`;
  }

  str += `.grid_${colNum}
{
  display:inline;
  float: left;
  position: relative;
  margin-left: ${colSpace / 2}px;
  margin-right: ${colSpace / 2}px;
}
`;

  for (let i = 1; i < colNum; i++) {
    str += `.push_${i},.pull_${i},\n`;
  }

  str += `.pull_${colNum},.push_${colNum}
{
  position:relative;
}
.alpha {
  margin-left: 0;
}
.omega {
  margin-right: 0;
}
`;

  for (let i = 1; i <= colNum; i++) {
    str += `.container_${colNum} .grid_${i} {\n  width: ${colWidth * i + colSpace * (i - 1)}px\n}\n`;
  }
  for (let i = 1; i <= colNum - 1; i++) {
    str += `.container_${colNum} .prefix_${i} {\n  padding-left: ${(colWidth + colSpace) * i}px\n}\n`;
  }
  for (let i = 1; i <= colNum - 1; i++) {
    str += `.container_${colNum} .suffix_${i} {\n  padding-right: ${(colWidth + colSpace) * i}px\n}\n`;
  }
  for (let i = 1; i <= colNum - 1; i++) {
    str += `.container_${colNum} .push_${i} {\n  left: ${(colWidth + colSpace) * i}px\n}\n`;
  }
  for (let i = 1; i <= colNum - 1; i++) {
    str += `.container_${colNum} .pull_${i} {\n  left: ${-(colWidth + colSpace) * i}px\n}\n`;
  }

  str += `
/* Clear Floated Elements
----------------------------------------------------------------------------------------------------*/

/* http://sonspring.com/journal/clearing-floats */

.clear {
  clear: both;
  display: block;
  overflow: hidden;
  visibility: hidden;
  width: 0;
  height: 0;
}

/* http://www.yuiblog.com/blog/2010/09/27/clearfix-reloaded-overflowhidden-demystified */

.clearfix:before,
.clearfix:after {
  content: '\\0020';
  display: block;
  overflow: hidden;
  visibility: hidden;
  width: 0;
  height: 0;
}

.clearfix:after {
  clear: both;
}

/*
  The following zoom:1 rule is specifically for IE6 + IE7.
  Move to separate stylesheet if invalid CSS is a problem.
*/

.clearfix {
  zoom: 1;
}
  `;
  return str;
}

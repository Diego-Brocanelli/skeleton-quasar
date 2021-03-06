export default {
  /**
   * @param {Number|String} tableWidth
   * @returns {Schema}
   */
  fieldTableWidth (tableWidth) {
    return this.setLayout({ tableWidth })
  },

  /**
   * @param {Boolean} show
   * @returns {Schema}
   */
  fieldTableShow (show = true) {
    return this.setLayout({ tableHidden: !show })
  },

  /**
   * @param {string} operator
   * @returns {Schema}
   */
  fieldTableWhere (operator = undefined) {
    let tableWhere = this.__fields[this.__currentField].$layout.tableWhere
    if (!operator && !tableWhere) {
      return this.setLayout({ tableWhere: 'automatic' })
    }

    if (!tableWhere || tableWhere === 'automatic') {
      tableWhere = operator
    }
    return this.setLayout({ tableWhere })
  },

  /**
   * @param {Function} tableFilter
   * @returns {Schema}
   */
  fieldTableFilter (tableFilter) {
    return this.setLayout({ tableFilter })
  },

  /**
   * @param {Boolean} tableRequired
   * @returns {Schema}
   */
  fieldTableRequired (tableRequired) {
    return this.setLayout({ tableRequired })
  },

  /**
   * @param {string} tableName
   * @returns {Schema}
   */
  fieldTableName (tableName) {
    return this.setLayout({ tableName })
  },

  /**
   * @param {string} tableAlign
   * @returns {Schema}
   */
  fieldTableAlign (tableAlign) {
    return this.setLayout({ tableAlign })
  },

  /**
   * @param {Boolean} tableSortable
   * @returns {Schema}
   */
  fieldTableSortable (tableSortable) {
    return this.setLayout({ tableSortable })
  },

  /**
   * @param {Function} tableFormat
   * @returns {Schema}
   */
  fieldTableFormat (tableFormat) {
    return this.setLayout({ tableFormat })
  },

  /**
   * @param {Number} order
   * @param {boolean} updateOthers
   * @returns {Schema}
   */
  fieldTableOrder (order, updateOthers = false) {
    this.setLayout({ tableOrder: order })
    if (updateOthers) {
      this.__fieldOrderUpdate('tableOrder', order)
    }
    return this
  }
}

class CategorizedTableStrategy extends AbstractStrategy{
   constructor(){
      super();
      this.rowHeader = false;
   }

   convertDataFrom(domElem){
      return {
         headers: this.extractHeaders(domElem),
         rows: this.normalizeRows(this.extractCategories(domElem),this.extractData(domElem))
      };
   }

   extractHeaders(domElem){
      var headers = Array.from(domElem.querySelectorAll("th"));
      if(!headers.length){
         this.rowHeader=true;
         headers = this.getDataRows(domElem).shift();
         headers = Array.from(headers.querySelectorAll("td"));
      }
      return headers.map(header=>header.textContent.trim());
   }

   extractCategories(domElem){
      return this.getCategoryRows(domElem)
         .map(this.extractCells);
   }

   extractData(domElem){
      var rows = Array.from(domElem.querySelectorAll("tr"));
      this.filterRows(rows);
      var res = []
      rows.forEach(row => {
         if (row.querySelectorAll("td").length===1) res.push(null);
         else res.push(this.extractCells(row));
      });
      return res;
   }

   filterRows(rowArray){
      rowArray.shift();
      if(this.rowHeader) rowArray.shift();
   }

   extractCells(rowElem) {
      return Array.from(rowElem.querySelectorAll("td"))
         .map(cell => cell.textContent.trim());
  }

   getDataRows(domElem){
      return Array.from(domElem.querySelectorAll("tr"))
         .filter(row => row.querySelectorAll("td").length>1);
   }

   getCategoryRows(domElem){
      return Array.from(domElem.querySelectorAll("tr"))
         .filter(row => row.querySelectorAll("td").length===1);
   }

   normalizeRows(categoryRows,normalRows){
      const self = this;
      var tempArr = [];
      categoryRows.forEach(cat =>
            tempArr.push({category: cat,
                          data: self.getCategorizedData(normalRows)
                     })
         );
      return tempArr;
   }

   getCategorizedData(rows){
      let tempArr = []
      console.log(rows);
      while(rows[0]){
         tempArr.push(rows.shift());
      }
      rows.shift();
      return tempArr;
   }

   couldExtract(domElem){
      return Boolean (getCategoryRows(domElem).length);
   }
}
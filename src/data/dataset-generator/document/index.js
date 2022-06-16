class Document {
  constructor({ brand, productType, size }) {
    this.brand = brand;
    this.productType = productType;
    this.size = size;
    this.productName = `${this.brand} ${this.productType}`;
    this.uniqName = `${this.productName} (${this.size})`;
    this.productKey = `${this.brand}-${this.productType}`.toLocaleLowerCase();
    this.uniqKey = `${this.productKey}-${this.size}`.toLocaleLowerCase();
  }
}

module.exports.Document = Document;

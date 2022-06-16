class Document {
  constructor({ brand, productType, size, productId, id }) {
    this.id = `${id}`;
    this.productId = `${productId}`;
    this.brand = brand;
    this.productType = productType;
    this.size = size;
    this.productName = `${this.brand} ${this.productType}`;
    this.uniqName = `${this.productName} (${this.size})`;
    // this.productKey = `${this.brand}-${this.productType}`.toLocaleLowerCase();
    // this.uniqKey = `${this.productKey}-${this.size}`.toLocaleLowerCase();
  }
}

module.exports.Document = Document;

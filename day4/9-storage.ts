class StoreItems<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

// Test with different types
const stringStorage = new StoreItems<string>(); 
stringStorage.addItem('rod');
stringStorage.addItem('bait');
stringStorage.addItem('line');
stringStorage.addItem('reel');
console.log(`String storage: ${stringStorage.getItems()}`);

const numberStorage = new StoreItems<number>(); 
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.addItem(4);
console.log(`Number storage: ${numberStorage.getItems()}`);

const customObjectStorage = new StoreItems<{ id: number, name: string }>(); // Use StoreItems
customObjectStorage.addItem({ id: 1, name: 'Ozzy' });
customObjectStorage.addItem({ id: 2, name: 'Newman' });
customObjectStorage.addItem({ id: 3, name: 'Maverick' });
customObjectStorage.addItem({ id: 4, name: 'Diana' });
console.log(`Object storage: ${JSON.stringify(customObjectStorage.getItems())}`);


class BackgroundManager {
  constructor() {
    this.storageManager = new StorageManager();
    this.highlighted = false;
    this.first = true;
  }

  errorHandler(err) {
    if (err) {
      throw err;
    }
  }

  highlightTableElements(tab) {
    this.highlighted = !this.highlighted;

    if (!this.highlighted) {
      browser.tabs.sendMessage(tab.id, {
        message: "unhighlightTableElements"
      });
      return;
    }

    if (this.first) {
      this.initializeTableManager(tab);
      this.first = !this.first;
    }

    browser.tabs.sendMessage(tab.id, {
      message: "highlightTableElements"
    });
  }

  initializeTableManager(tab) {
    console.log("Sending message to ContentScript, initializing");

    browser.tabs.sendMessage(tab.id, {
      message: "initializeManager"
    });
  }

  storeCurrentDataset({dataset}) {
    this.storageManager
      .setDataset(dataset)
      .catch(this.errorHandler);
  }

  notifyDocumentLoaded(data) {
    return this.storageManager.getDataset();
  }

  getDatasetViewSettings() {
    return this.storageManager.getDatasetViewSettings()
      .then(datasetViewSettings => {
        if (!datasetViewSettings) {
          return {
            amountPerPage: 7,
          };
        }

        return datasetViewSettings;
      })
      .catch(this.errorHandler);
  }

  setDatasetViewSettings(settings) {
    return this.storageManager.setDatasetViewSettings(settings);
  }
}

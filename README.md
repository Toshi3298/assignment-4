# Assignment 4 - Task Dashboard

## Dosya Yapısı
* **index.html:** Sayfa iskeleti.
* **styles.css:** Görünüm ve "completed" stili.
* **api.js:** Asenkron veri simülasyonu (Promise).
* **taskManager.js:** Class yapısı ve Immutability mantığı.
* **main.js:** DOM manipülasyonu ve olay dinleyicileri.

## Karşılaşılan Zorluklar
Task ID'lerini `Object.defineProperty` ile salt okunur (read-only) yapmak ve verileri `immutability` kurallarına (orijinal diziyi bozmadan) uygun şekilde güncellemek başta zorlayıcıydı. Ayrıca asenkron (async/await) veri akışını DOM ile senkronize etmek üzerine çalıştım.

# wishListManager
Chrome extention to manage your wish lists on differents websites


------------
[Source](https://www.reddit.com/r/chrome/comments/8g8qzo/chrome_extension_ideas/e57jh9r/)
```
I thought this would already exist but an extension where you can keep track of shopping wish lists from as many websites as you want. Sure, you could just make a folder of bookmarks, but what if you don't feel like clicking the link to see it again? And maybe Amazon already has something similar, but it's just to find that item on Amazon, and when trying to download it it asked for way more permissions than it really needs.
```



----------

##### TODO:

TODO: coloris l'etoile si objet deja en favoris
- Recup item title, allow used to edit it before and after saving
- TODO: les champs recuperer (title, price) sont en place holder dans champs input afin que l'user puisse modifier ou remplir en cas d'absense a la validation du formulaire

##### Doc

background page : https://developer.chrome.com/extensions/background_pages

Extension current tab : https://developer.chrome.com/extensions/windows#current-window

Localstorage : https://developer.chrome.com/extensions/storage


MANIFEST :


  "permissions": [
    "tabs", : acces user current tab
    "activetab", : https://developer.chrome.com/extensions/activeTab
    "<all_urls>" : access all website
    "storage"  : access localstorage
  ],

  "content_scripts" -> used pour injection du bouton sur les site 

  "web_accessible_resources" -> html file availlable to inject

  --------------

  Instalation : 
  Chrome > Extention, load unpacked
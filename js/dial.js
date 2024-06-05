           var dialog = document.querySelector('dialog')
      // выводим модальное окно
      document.querySelector('#open').onclick = function () {
        dialog.showModal()
      }
      // скрываем окно
      document.querySelector('#close').onclick = function () {
        dialog.close() 
      }
   function search() {
            let input = document.getElementById("searchText").value.toUpperCase();
            let ul = document.getElementById("towns");
            let li = ul.getElementsByTagName("li");
            let count = 0;

            for (let i = 0; i < li.length; i++) {
                let text = li[i].textContent || li[i].innerText;
                if (text.toUpperCase().indexOf(input) > -1) {
                    li[i].style.fontWeight = "bold";
                    count++;
                } else {
                    li[i].style.fontWeight = "normal";
                }
            }

            document.getElementById("result").innerHTML = "Намерени съвпадения: " + count;
        }
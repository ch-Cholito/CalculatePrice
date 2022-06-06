
        let arr = [];
        const brand = document.querySelector('.brand');
        const color = document.querySelector('.color');
        const year = document.querySelector('.year');
        const radio = document.querySelector('.rb1');
        const leather = document.querySelector('#leather');
        const gold = document.querySelector('#gold');
        const stereo = document.querySelector('#stereo');
        const btn = document.querySelector('.button');


        // Selected brand price

        function calculateBrand(brand) {
            let result
            switch (brand) {
                case 'LADA':
                    result = 600000
                    break;
                case 'RENO':
                    result = 700000
                    break;
                case 'BMW':
                    result = 1000000
                    break;
                case 'OPEL':
                    result = 800000
                    break;
            }
            return result;
        }

        // Selected color price

        function calculateColor(color) {
            let result
            switch (color) {
                case 'BLACK':
                    result = 0
                    break;
                case 'WHITE':
                    result = 0
                    break;
                case 'GREEN':
                    result = 1000000
                    break;
                case 'BLUE':
                    result = 800000
                    break;
            }
            return result;
        }

        // Selected year price

        function calculateYear(year) {
            return year > 2018 ? 100000 : 0;
        }

        // Selected dirve type price

        function calculateDriveType(radioValue) {
            if (radioValue == 'AUTO') {
                return 50000;
            } else {
                return 0;
            }

        }


        // Calculate button

        btn.addEventListener('click', () => {
            arr[0] = calculateBrand(brand.value);
            arr[1] = calculateColor(color.value);
            arr[2] = calculateYear(+year.value);
            const radioValue = document.querySelector('.rb1:checked').value
            arr[3] = calculateDriveType(radioValue);

            arr[4] = [].reduce.call(document.querySelectorAll('.checkbox:checked'), (sumAcc, checkbox) => {
                return sumAcc + +checkbox.value
            }, 0)
            const sum = arr.reduce((sumAcc, price) => {
                return sumAcc + price
            }, 0);
            alert(sum);
        })


function something()
	{
        var x = window.localStorage.getItem('aa');

        x = x * 1 + 1;

        window.localStorage.setItem('aa', x);

		alert(x);

	}

function add_to_cart(id)
{
	var key = 'product_' + id;
    var x = window.localStorage.getItem(key);
    x = x * 1 + 1;
    window.localStorage.setItem(key, x);

}
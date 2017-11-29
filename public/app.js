function something()
	{
        var x = window.localStorage.getItem('aa');

        x = x * 1 + 1;

        window.localStorage.setItem('aa', x);

		alert(x);

	}

function add_to_cart(id)
{
    alert('Вы добавили пиццу с id ' + id);
}
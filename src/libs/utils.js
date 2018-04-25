const send = function ($againSend, b) {
	$againSend.text(b + 'S后可重发')
	$againSend.attr("disabled", "disabled")
	var setTime = setInterval(() => {
		b = b - 1;
		$againSend.text(b + 'S后可重发')
		if (b < 0) {
			clearInterval(setTime);
			$againSend.text("重新发送");
			b = 60;
			$againSend.removeAttr("disabled")
		}
		return false;
	}, 1000)
}

export {	
	send	
}

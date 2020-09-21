var modelBtn = document.querySelector('.model-btn');

var modelBg = document.querySelector('.model-bg');

var modelClose =document.querySelector('.model-close');

modelBtn.addEventListener('click', function(){
	modelBg.classList.add('bg-active');
});

modelClose.addEventListener('click',function(){
	modelBg.classList.remove('bg-active');
})

const sidebar = document.querySelector('.sidebar');
const openClose = document.querySelector('.openClose');
const bars = document.querySelector('.bars');
const bgModil = document.querySelector('.bg');
const modilPH = document.querySelector('.modilPH');
const closeModal = document.querySelector('.close-modal');

openClose.addEventListener('click', function ()
{
    sidebar.classList.toggle('sidebar-hidden');
});


bars.addEventListener('click', function ()
{
    bgModil.classList.remove('hidden');
    modilPH.classList.remove('hidden');
});

bgModil.addEventListener('click', function ()
{
    bgModil.classList.add('hidden');
    modilPH.classList.add('hidden');
})

closeModal.addEventListener('click', function ()
{
    bgModil.classList.add('hidden');
    modilPH.classList.add('hidden');
})


if (window.innerWidth > 1500)
{
    sidebar.classList.remove('sidebar-hidden');
}

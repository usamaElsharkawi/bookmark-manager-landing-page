const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove('border-soft-red', 'border-b-4');
  });

  panels.forEach((panel) => panel.classList.add('hidden'));

  const target = e.target.getAttribute('data-target');
  
  document.getElementById(target).classList.remove('hidden');
  
  const clickedTab = e.target.closest('.tab');
  clickedTab.children[0].classList.add('border-soft-red', 'border-b-4');
}

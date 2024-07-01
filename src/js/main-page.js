
// - - - - - - - - - - - Main Functions to use - - - - - - - - - -
/*
// For buttons to transport from html page to another html page
function transportPageButton(buttonClass, pageName){
if(document.querySelector(`.${buttonClass}`)){
  document.querySelector(`.${buttonClass}`).addEventListener('click', function(){
    window.location.href = `../pages/${pageName}.html`;
  })
}
};
*/
// - - - - - - -- - -- - -- Header Section - -- - - - - - - - - - 

function showSiderbar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

//Calculate Type Button in Header Bar
document.querySelector('.calculate-button-header').addEventListener('click', function(){
  window.location.href = './pages/calculating-type.html';
});


// - - - - - - - - - - Calculating Button Section - - - - - - - - - - 

//transportPageButton('calculate-button', 'calculating-type');
document.getElementById('button').addEventListener('click', function(){
    window.location.href = './pages/calculating-type.html';
  })

// - - - - - - - - - Calculating Type Section - - - - - - - - - - - 

//transportPageButton('final-result', 'calculating-the-exempt');
//transportPageButton(`unknown-marks`, `calculate-required-grades`);

document.querySelector(`.final-result`).addEventListener('click', function(){
    window.location.href = `../pages/calculating-the-exempt.html`;
  })
document.querySelector(`.unknown-marks`).addEventListener('click', function(){
    window.location.href = `./pages/calculate-required-grades.html`;
  })

// - - - - - - - - - - - Message Us Section -- - - - - - - - - -

//transportPageButton(`calculate-button`, `calculating-type`);
document.querySelector(`.mu-button`).addEventListener('click', function(){
    window.location.href = `./pages/calculating-type.html`;
  })
// - - - - - - - - - - - - Social Media Links - - - - - - - - - - -
document.getElementById('facebookImg').addEventListener('click', function(){
  window.open('https://www.facebook.com/people/Natigati-Website/61560080236721/', '_blank' );
})
document.getElementById('telegramImg').addEventListener('click', function(){
  window.open('https://t.me/natigatiTChannel2468', '_blank' );
})

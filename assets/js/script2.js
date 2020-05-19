$('#carousel-1').on('slid.bs.carousel', function ()
{
  var swiper = new Swiper('.swiper-container',
  {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect:
    {
      rotate: 60,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows : true,
    },
    autoplay:
    {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
  });
});
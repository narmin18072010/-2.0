const button = document.querySelectorAll('.card-link1')


const text = ["This site is based on Bootstrap", "This site is based on HTML/CSS", "This site is based on JavaScript", "This site is based on HTML/CSS", "This site is based on HTML/CSS", "This site is based on Bootstrap", "This site is based on Bootstrap", "This site is based on JavaScript", "This site is based on JavaScript", "This site is based on JavaScript", "This site is based on JavaScript", "This site is based on JavaScript", "This site is based on JavaScript", "This site is based on JavaScript", "This site is based on JavaScript"]

        
button.forEach((item, index)  => {
item.addEventListener("click", () => {

Swal.fire({
    title: `${text[index]}`,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
})
})


gsap.from(".card", {opacity: 0, duration: 3.5, delay: 1, stagger: .6})
gsap.from(".item", {opacity: 0, duration: .5, delay: 2.5, stagger: .6})


//1. create your own resume data in JSON format
var resume = {
  name: 'Dinesh',
  skills: ['html', 'css', 'javascript', 'react', 'figma'],
  experience: ['Gravvity', 'Vankay', 'CloudVision247'],
  projects: ['Keeper', 'Grove', 'Profile Deck'],
}

//2. For the above JSON, iterate over all for loops 1) For 2) For in 3) For of 4) ForEach

//For and ForEach
for (let i = 0; i < Object.keys(resume).length; i++) {
  let key = Object.keys(resume)[i]
  if (Array.isArray(resume[key])) {
    console.log(`${key}:`)
    resume[key].forEach((item) => {
      console.log(item)
    })
  } else {
    console.log(`${key}: ${resume[key]}`)
  }
}

console.log('-------------------------------')

//For in and For of
for (let key in resume) {
  // for in is used for iteratable objects.
  if (Array.isArray(resume[key])) {
    // for of can be used only for arrays or strings
    console.log(`${key}:`)
    for (let item of resume[key]) {
      console.log(item)
    }
  } else {
    console.log(`${key}: ${resume[key]}`)
  }
}

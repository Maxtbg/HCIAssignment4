//////////////////////////////////////////////////////////////
//  js/app.js
//////////////////////////////////////////////////////////////
// Tiny helper only for optional runtime tweaks – all navigation is real links.
function pickPhoto(){
    const inp=document.createElement('input');
    inp.type='file'; inp.accept='image/*'; inp.multiple=true;
    inp.onchange= async e=>{
      for(const f of e.target.files){
        const key = `${trip.id}_${Date.now()}`;           // unique
        await putPhoto(key,f);
        trip.images.push(key);                            // store key
        if(!trip.cover) trip.cover=key;
      }
      localStorage.setItem(KEY,JSON.stringify(trips));
      renderImgs();
    };
    inp.click();
  }
function renderImgs(){
    gal.innerHTML='';
    if(!trip.images.length) gal.innerHTML='<p>No photos yet.</p>';
    trip.images.forEach(key=>{
      getPhotos(key, blob=>{
        const url=URL.createObjectURL(blob);
        const im=document.createElement('img');
        im.src=url; gal.appendChild(im);
      })
    });
  }


    
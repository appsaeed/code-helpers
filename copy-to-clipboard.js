
    async function copyPicture(url){
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            await navigator.clipboard.write([
                new ClipboardItem({
                    [blob.type]: blob
                })
            ]);
            console.log('Image copied.');
        } catch (err) {
            console.error(err.name, err.message);
        }
    };


    const button = document.querySelector('.btn');
    button.addEventListener('click', function() {

            copyPicture('http://localhost/application.com/qrcode/63069e6925cb1/vie')
        


    })


    function imageToBlob(imageURL) {
        const img = new Image;
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        img.crossOrigin = "";
        img.src = imageURL;
        return new Promise(resolve => {
            img.onload = function() {
                c.width = this.naturalWidth;
                c.height = this.naturalHeight;
                ctx.drawImage(this, 0, 0);
                c.toBlob((blob) => {
                    // here the image is a blob
                    resolve(blob)
                }, "image/png", 0.75);
            };
        })
    }

    imageToBlob('http://localhost/application.com/qrcode/63069e6925cb1/view')

    // try {

    //     async function copyImage(imageURL) {
    //         const blob = await imageToBlob(imageURL)
    //         const item = new ClipboardItem({
    //             "image/png": blob
    //         });

    //         navigator.clipboard.write([item]);
    //     }
    //     copyImage('http://localhost/application.com/qrcode/63069e6925cb1/view+');
    // } catch (error) {
    //     console.log(error)
    // }

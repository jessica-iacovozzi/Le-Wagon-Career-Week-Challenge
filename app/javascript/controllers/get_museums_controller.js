import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="get-museums"
export default class extends Controller {
  static targets = ['museums']
  connect() {
    // console.log('hello');
  }

  getMuseums() {
    const lng = 13.437641
    const lat = 52.494857

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat},museums.json?access_token=${ENV['MAPBOX_TOKEN']}`)
      .then((response) => response.json())
      .then((data) => {
        // data.features.forEach(museum)
          console.log(data);
        // TRYING TO LOOP THROUGH EVERY KEY-VALUE PAIR
        //   data.features.forEach(obj => {
        //     Object.entries(obj).forEach(([key, value]) => {
        //         console.log(`${key} ${value}`);
        //     });
        //     console.log('-------------------');
        // });

          // TRYING TO GROUP EVERY MUSEUM RESULT(FEATURE) BY POSTCODE
          // const grouped = _.groupBy(data.features, 'context[0]');
          // console.log(grouped);

          // INSERTING POSTCODE OF FIRST MUSEUM
          // const museum = `{
          //   "${data.features[0].context[0].text}": ["${data.features[0].text}"]
          // }`
          // this.museumsTarget.innerHTML = museum

  });
  }
}

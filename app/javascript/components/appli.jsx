  import React, { Component } from 'react';

  import { Spinner, Page, Card, Button, Modal, Navigation} from '@shopify/polaris';
  import { HomeMajorMonotone,
           RepeatOrderMajorMonotone,
           BugMajorMonotone,
           PhoneMajorMonotone,
           SettingsMajorMonotone,
           ShipmentMajorMonotone,
           AddNoteMajorMonotone,
           LogOutMinor,
           OrdersMajorTwotone,
           ProductsMajorTwotone} from '@shopify/polaris-icons';
  import mapboxgl from 'mapbox-gl';


  import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

  mapboxgl.accessToken = "pk.eyJ1Ijoic2F0aXZ2YTEyMyIsImEiOiJjazZnODQyYXcyMXlwM2ttZzM2N2U2dnQ2In0.4ztCz1IXdRfmRMO6tdy0nw"



  class Appli extends Component {
    constructor(props) {
      super(props)
      this.state = {
        lng: 5,
        lat: 34,
        zoom: 2
      };
    }




    // handlePageChange = (params) => {
    //   this.fetchProducts(params)
    // }
    // handleOrderPageChange = (params) => {
    //   this.fetchOrdersFulfilled(params)
    // }
    componentDidMount() {

      const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
      });
    }

    renderContent = () => {

      if (this.state.menu_active == "Home") {
        return (

         <div>
           <div ref={el => this.mapContainer = el} className="mapContainer" />
         </div>
        )
      }
    }

    render() {
      return (
        <Page title="Kinexya LOGISTICS">
          <div className="w30">
            <Navigation location="/"
              shop_id={this.props.shop_id}
              shopify_domain={this.props.shopify_domain}
            >
              <Navigation.Section
                  items={[
                    {
                      onClick: () => alert('hoho'),
                      label: 'Home',
                      icon: HomeMajorMonotone,
                      value: 'Home'
                    },
                    {
                      url: '/logout',
                      label: 'Déconnexion',
                      icon: LogOutMinor,
                    },
                  ]}
                />

            </Navigation>
          </div>
          <div className="w70">
           <div ref={el => this.mapContainer = el} className="mapContainer" />


          </div>

        </Page>

      );
    }
  }

  export default Appli;


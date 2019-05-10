<template>
    <div class="parallax has-shape shape-4-revert white-color center-aligned is-map">
        <div id="map_canvas"></div>
    </div>
</template>

<script>

const a = new google.maps.LatLng(42.4943981, 45.451405);
google.maps.event.addDomListener(window, 'load', () => {
  const t = {
    zoom: 5,
    scrollwheel: !1,
    center: a,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas'],
    },
  };
  const e = new google.maps.Map(document.getElementById('map_canvas'), t, document.getElementById('map_canvas'));
  const l = new google.maps.LatLng(41.7943981, 44.822222);
  new google.maps.Marker({
    position: l,
    map: e,
    icon: 'images/marker.png',
  }).setAnimation(google.maps.Animation.BOUNCE);
  const n = new google.maps.StyledMapType([{
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [{
      color: '#444444',
    }],
  }, {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [{
      color: '#f2f2f2',
    }],
  }, {
    featureType: 'poi',
    elementType: 'all',
    stylers: [{
      visibility: 'off',
    }],
  }, {
    featureType: 'road',
    elementType: 'all',
    stylers: [{
      saturation: -100,
    }, {
      lightness: 45,
    }],
  }, {
    featureType: 'road.highway',
    elementType: 'all',
    stylers: [{
      visibility: 'simplified',
    }],
  }, {
    featureType: 'road.arterial',
    elementType: 'labels.icon',
    stylers: [{
      visibility: 'off',
    }],
  }, {
    featureType: 'transit',
    elementType: 'all',
    stylers: [{
      visibility: 'off',
    }],
  }, {
    featureType: 'water',
    elementType: 'all',
    stylers: [{
      color: '#0a9abd',
    }, {
      visibility: 'on',
    }],
  }], {});
  e.mapTypes.set('usroadatlas', n), e.setMapTypeId('usroadatlas');
});

export default {

};
</script>

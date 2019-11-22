/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START maps_icon_simple]
// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
export function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -33, lng: 151 }
  });

  var image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  var beachMarker = new google.maps.Marker({
    position: { lat: -33.89, lng: 151.274 },
    map: map,
    icon: image
  });
}
// [END maps_icon_simple]
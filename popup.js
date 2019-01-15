// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let localCal = document.getElementById('localCal');
let scheduleCal = document.getElementById('scheduleCal');

localCal.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementById("footer").innerHTML = \'<iframe src="https://calendar.google.com/calendar/embed?showPrint=0&amp;showCalendars=0&amp;mode=WEEK&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=huj45girg8pbqclcmfebo930p8%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=Asia%2FKolkata" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>\''});
  });
};

scheduleCal.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {file: "scheduler.js"}, function(){
      //all injected
    })
  });
};


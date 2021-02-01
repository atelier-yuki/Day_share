import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

document.addEventListener('turbolinks:load', function() {

  let containerEl = document.getElementById('external-events');
  let calendarEl = document.getElementById('calendar');
  let checkbox = document.getElementById('drop-remove');

  new Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function(eventEl) {
      return {
        title: eventEl.innerText
      };
    }
  });

  let calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, bootstrapPlugin, googleCalendarPlugin ],
    initialView: 'timeGridDay',
    selectable: true,
    themeSystem: 'bootstrap',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    buttonText: {
      today: '今日',
      month: '月',
      week: '週',
      day: '日',
      list: '予定一覧'
    },
    slotDuration: '00:15:00',
    contentHeight: 'auto',
    businessHours: true,
    navLinks: true,
    editable: true,
    locale: "ja",
    dayMaxEvents: true,

    googleCalendarApiKey: '1AIzaSyAHAaNbzF8b8AcrPlE9cn8lsYY7tTeN2A0455d74abd5967631',
    events: {
        googleCalendarId: 'ja.japanese#holiday@group.v.calendar.google.com',
        display: 'background',
        eventColor: '#378006'
      },

    dayCellContent: function (e) {
      e.dayNumberText = e.dayNumberText.replace('日', '');
    }
  });

  calendar.render();
});
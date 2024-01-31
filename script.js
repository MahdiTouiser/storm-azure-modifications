import $ from 'jquery';
import moment from 'jalali-moment';

const updateJalaliDate = () => {
    const timeElement = $('time');
    const dateElement = $('.transition-change-info-date');
    // const commentElement = $('.comment-timestamp');

    const isWorkItem = window.location.href.includes('?workitem=');

    if (isWorkItem) {
        updateElementDate(timeElement, 'datetime', 'YYYY/MM/DD HH:mm:ss');
        updateElementDate(dateElement, 'text', 'MM/DD/YYYY');
        // updateElementDate(commentElement , 'text' ,'MM/DD/YYYY' )
    }
};

const updateElementDate = (element, attribute, format) => {
    if (element.length > 0) {
        const dateValue = attribute === 'datetime' ? element.attr(attribute) : element.text();
        const parsedDate = moment(dateValue, format);
        
            const jalaliDate = moment(parsedDate).locale('fa').format(
                attribute === 'datetime' ? 'YYYY/MM/DD HH:mm:ss' : 'YYYY/MM/DD'
            );
            element.text(jalaliDate);
    }
};

setInterval(updateJalaliDate, 1000);

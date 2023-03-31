import { LightningElement } from 'lwc';

export default class SurveyForm extends LightningElement {
    genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ];

    handleSubmit(event) {
        event.preventDefault(); // Prevent form submission
        const fields = event.target.querySelectorAll('lightning-input, lightning-radio-group, lightning-textarea');
        let formData = {};
        fields.forEach(field => {
            formData[field.name] = field.value;
        });
        console.log(formData); // Log form data to console
    }
}

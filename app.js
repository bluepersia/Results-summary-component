import data from './data.js';

const total = data.reduce ((prev, curr) => prev + curr.score, 0);
const avg = total / data.length;

document.querySelector ('.rs_result_val').textContent = avg.toFixed (0);

data.forEach (el =>
    {
        const doc = document.querySelector (`.rs_summary_item.${el.category.toLowerCase ()}`);

        doc.querySelector('.rs_summary_item_label').textContent = el.category;
        doc.querySelector('.rs_summary_item_val span').textContent = el.score;
    });
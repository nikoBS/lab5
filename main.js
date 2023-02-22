let column_1, column_2, column_3, column_4;

column_1 = [7, 7, 9, 6, 2, 7, 6, 1, 7, 6, 5, 2, 5, 4, 1, 6, 4, 3, 3, 6, 3, 3, 5, 8, 5, 9, 5, 2, 3, 1];
column_2 = [2, 9, 1, 4, 5, 9, 9, 6, 6, 4, 7, 9, 10, 8, 9, 7, 6, 1, 9, 6, 8, 2, 5, 6, 4, 2, 6, 1, 1, 6];
column_3 = [53, 77, 95, 93, 65, 52, 43, 63, 99, 50, 94, 61, 78, 99, 61, 52, 87, 83, 56, 41, 58, 55, 64, 88, 50, 97, 72, 46, 61, 45];
column_4 = [79, 98, 69, 45, 67, 75, 82, 63, 79, 44, 94, 88, 49, 58, 86, 64, 65, 71, 51, 57, 82, 75, 50, 55, 88, 58, 87, 63, 54, 99];


function summation(array) {
	let sum = 0;
	
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	
	return sum;
}


let sum_1 = summation(column_1);
let sum_2 = summation(column_2);
let sum_3 = summation(column_3);
let sum_4 = summation(column_4);

let sums = [sum_1, sum_2, sum_3, sum_4];

let total_score = 0;
for (let i = 0; i < 4; i++) {
	total_score += sums[i];
}


const results = {
	col1: column_1,
	col2: column_2,
	col3: column_3,
	col4: column_4,
	sums: sums,
	total_score: total_score
}
console.log(results);
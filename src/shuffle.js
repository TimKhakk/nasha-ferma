const shuffle = array => {
	const nums = [];
	let j, i, temp;

	for (let i = 1; i <= array.length; i++) {
		nums.push(i);
	}

	for (i = array.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		temp = nums[j];
		nums[j] = nums[i];
		nums[i] = temp;
	}

	if (nums.length === [...new Set(nums)].length) {
		return nums;
	} else {
		return 'Есть совпадения!!!';
	}
};

export default shuffle;

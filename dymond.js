function Pattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += '*';
        }
        console.log(row);
    }
    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += '*';
        }

        console.log(row);
    }
}
Pattern(5);
const a = 3.5;
const b = 6;
const c = 3;
const p = 1.5;
// 1 (x^2/a^2)+(y^2/b^2)+(z^2/c^2) = 1
// 2: (x^2/a^2)+(y^2/b^2)-(z^2/c^2) = 1 || (x^2/a^2)+(y^2/b^2)-(z^2/c^2) = 1
// 3: -(x^2/a^2)-(y^2/b^2)+(z^2/c^2) = 1 || (x^2/a^2)+(y^2/b^2)-(z^2/c^2) = -1
// 6: (x^2/a^2)+(y^2/b^2) = 2*p*z
// 4: (x^2/a^2)-(y^2/b^2) = 2*p*z
// 5: (x^2/a^2)+(y^2/b^2)-(z^2/c^2) = 0
// 7: (x^2/a^2)+(y^2/b^2) = 1
// 8: (x^2/a^2)-(y^2/b^2) = 1
// 9: y^2 = 2*p*x
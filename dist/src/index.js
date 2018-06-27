"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("./tree");
function makeNode(value) {
    return {
        value,
        left: null,
        right: null,
    };
}
function main() {
    const t = {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 4,
                left: makeNode(8),
                right: makeNode(9)
            },
            right: {
                value: 5,
                left: makeNode(10),
                right: makeNode(11)
            },
        },
        right: {
            value: 3,
            left: {
                value: 6,
                left: makeNode(12),
                right: makeNode(13)
            },
            right: {
                value: 7,
                left: makeNode(14),
                right: makeNode(15)
            },
        },
    };
    console.log(tree_1.printAsciiTree(t));
}
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBNEM7QUFFNUMsa0JBQWtCLEtBQWE7SUFDM0IsT0FBTztRQUNILEtBQUs7UUFDTCxJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxJQUFJO0tBQ2QsQ0FBQztBQUNOLENBQUM7QUFFRDtJQUNJLE1BQU0sQ0FBQyxHQUFTO1FBQ1osS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLEVBQUc7WUFDSCxLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRTtnQkFDRixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDakIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDckI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQ3RCO1NBQ0o7UUFDRCxLQUFLLEVBQUc7WUFDSixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksRUFBRTtnQkFDRixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQztnQkFDbEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUM7YUFDdEI7WUFDRCxLQUFLLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2xCLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDO2FBQ3RCO1NBQ0o7S0FDSixDQUFDO0lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELElBQUksRUFBRSxDQUFDIn0=
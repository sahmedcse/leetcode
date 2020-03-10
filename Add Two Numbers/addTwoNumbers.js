/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = new ListNode(0);
    let current = result;
    let carry = 0;
    let currentL1Node = l1;
    let currentL2Node = l2;
    
    while((currentL1Node !== null) || (currentL2Node !== null) || (carry !== 0)) {
        const currentL1NodeValue = (currentL1Node) ? currentL1Node.val : 0;
        const currentL2NodeValue = (currentL2Node) ? currentL2Node.val : 0;
        const total = carry + currentL1NodeValue + currentL2NodeValue;
        carry = (total >= 10) ? Math.floor(total / 10) : 0;
        const stayDigit = total % 10;
        
        if(!current.next) {
            const newListNode = new ListNode(stayDigit);
            current.next = newListNode;
            current = newListNode; 
        }    
        
        currentL1Node = (currentL1Node) ? currentL1Node.next : null;
        currentL2Node = (currentL2Node) ? currentL2Node.next : null;
    }
    
    return result.next;
};
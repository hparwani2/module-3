function findIntersection(head1, head2) {
    let length1 = findLength(head1);
    let length2 = findLength(head2);

    let diff = Math.abs(length1-length2);

    if(length1 > length2) {
        while(diff-- > 0) {
            head1 = head1.next;
        }
    } else {
        while(diff-- > 0) {
            head2 = head2.next;
        }
    }

    while(head1 && head2 && head1 !== head2) {
        head1 = head1.next;
        head2 = head2.next;
    }

    if(!head1 || !head2) {
        return null;
    }
    return head1;
}
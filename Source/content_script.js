walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bUnicorn\b/g, "Pre-IPO startup valued at $1 billion or more");
	v = v.replace(/\bunicorn\b/g, "pre-IPO startup valued at $1 billion or more");
	v = v.replace(/\bUnicorns\b/g, "Pre-IPO startups valued at $1 billion or more");
	v = v.replace(/\bunicorns\b/g, "pre-IPO startups valued at $1 billion or more");
	v = v.replace(/\bUNICORN\b/g, "PRE-IPO STARTUP VALUED AT $1 BILLION OR MORE");
	v = v.replace(/\bUNICORNS\b/g, "PRE-IPO STARTUPS VALUED AT $1 BILLION OR MORE");
	
	textNode.nodeValue = v;
}



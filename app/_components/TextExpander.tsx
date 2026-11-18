"use client";

import { useState } from "react";

function TextExpander({ children }: { children: string }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayText = isExpanded
        ? children
        : children.split(" ").slice(0, 30).join(" ") + "...";

    return (
        <span>
            {displayText}{" "}
            <button
                className={
                    "text-primary-blue border-b border-primary-blue leading-3 pb-1"
                }
                onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show less" : "Show more"}
            </button>
        </span>
    );
}

export default TextExpander;

import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const BlogCard = ({
  title,
  excerpt,
  date,
  author,
  image,
  slug,
  publishedAt,
}) => {
  return (
    <Card className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center text-xs text-muted-foreground mb-2">
          <span>
            {new Date(publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>

          <span>By {author}</span>
        </div>
        <h3 className="text-xl font-bold text-black group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;

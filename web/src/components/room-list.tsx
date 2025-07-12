import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { dayjs } from "../lib/format-relative-date";
import { useRooms } from "./http/use-rooms";


export function RoomList() {
    const { data, isLoading } = useRooms()

    return(
        <Card>
            <CardHeader>
                <CardTitle>
                    Recent rooms
                </CardTitle>
                <CardDescription>
                    Quick access to recently created rooms
                </CardDescription>
            </CardHeader>
            
            <CardContent className="flex flex-col gap-3">
                {isLoading && <p className="text-muted-foreground text-sm">Loading rooms...</p>}

                {data?.map((room) => {
                    return (
                        <Link to={`/room/${room.id}`} key={room.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50">
                            <div className="flex-1 flex flex-col gap-1">
                                <h3 className="font-medium">{room.name}</h3>

                                <div className="flex items-center gap-2">
                                    <Badge className="text-xs" variant="secondary">{dayjs(room.createdAt).toNow()}</Badge>
                                    <Badge className="text-xs" variant="secondary">{room.questionCount} question(s)</Badge>
                                </div>
                            </div>

                            <span className="flex items-center gap-1 text-sm">
                                Enter
                                <ArrowRight className="size-3"/>
                            </span>
                        </Link>
                    )
                })}
            </CardContent>
        </Card>
    )
}
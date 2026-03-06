import { Card } from "@/presentation/components";
import { cn } from "@/utils/twClassnamesResolver";
import { Text, TouchableOpacity, View } from "react-native";
import { ITaskCardButton } from "./interface";

export const TaskCardButton = ({ task }: ITaskCardButton) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      <Card className={cn("bg-neutral-0 border border-neutral-200")}>
        <View className={cn("gap-1")}>
          <Text className='text-sm font-lexend-semi-bold text-neutral-1000'>
            {task.title}
          </Text>
          <Text className='text-xs font-lexend-regular text-neutral-600'>
            {task.description}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};


function Card(props) {
  const { gitHubAvatar, fullName, gitHubUserName, quote } = props?.CardItem;

  return (
    <div class="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 w-56 shadow-sm hover:shadow-md transition-shadow">
      <div class="relative">
        <img
          src={gitHubAvatar}
          alt={fullName}
          class="w-16 h-16 rounded-full object-cover"
        />
      </div>
      <div class="text-center">
        <p class="font-medium text-gray-900">{fullName}</p>
        <p class="text-sm text-gray-500">{gitHubUserName}</p>
      </div>
      <div class="w-full p-4 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
        {quote}
      </div>
    </div>
  );
}

export default Card;

type Props = {
  mainTitle: string;
  mediaType: string;
  availableBranches: string[] | null;
}

export function BookComponent({ mainTitle, mediaType, availableBranches }: Props) {
  return <dl>
    <dt>Tittel</dt>
    <dd>{mainTitle}</dd>
    <dt>Type</dt>
    <dd>{mediaType}</dd>
    <dt>Ledig ved</dt>
    <dd>{availableBranches && availableBranches.join(', ')}</dd>
  </dl>;
}
